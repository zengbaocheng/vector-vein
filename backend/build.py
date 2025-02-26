# -*- coding: utf-8 -*-
# @Author: Bi Ying
# @Date:   2023-05-15 13:34:28
# @Last Modified by:   Bi Ying
# @Last Modified time: 2024-07-01 15:51:14
import os
import shlex
import shutil
import argparse
import platform
import subprocess
from pathlib import Path


def run_cmd(cmd: str, split=False):
    """
    Run command in shell
    """
    if split:
        cmd = shlex.split(cmd)
    return subprocess.run(cmd, shell=True)


def build_production(version):
    run_cmd("pyinstaller main.spec --noconfirm", split=False)
    # Create a version file in ./dist/vector-vein/
    version_txt_path = Path("./dist/vector-vein/version.txt")
    if not version_txt_path.parent.exists():
        version_txt_path.parent.mkdir(parents=True, exist_ok=True)
    with open("./dist/vector-vein/version.txt", "w") as f:
        f.write(version)

    # Copy migrations to dist/vector-vein/migrations
    migrations_path = Path("./migrations")
    if migrations_path.exists():
        dist_migrations_path = Path("./dist/vector-vein/migrations")
        if dist_migrations_path.exists():
            shutil.rmtree(dist_migrations_path)
        shutil.copytree(migrations_path, dist_migrations_path)

    system_name = platform.system().lower()
    if system_name == "darwin":
        platform_name = "mac"
    elif system_name == "windows":
        platform_name = "windows"
    else:
        platform_name = "linux"

    # Create the ZIP file
    zip_filename = f"vector-vein-{platform_name}-v{version}.zip"
    zip_filepath = Path(f"./dist/{zip_filename}")

    # Compress the directory
    shutil.make_archive(
        base_name=zip_filepath.with_suffix(""), format="zip", root_dir="./dist", base_dir="vector-vein"
    )

    print(f"Created {zip_filename} at {zip_filepath}")


def build_development(version):
    run_cmd("pyinstaller debug.spec --noconfirm", split=False)
    # Create a version file in ./dist/vector-vein/
    version_txt_path = Path("./dist/vector-vein/version.txt")
    if not version_txt_path.parent.exists():
        version_txt_path.parent.mkdir(parents=True, exist_ok=True)
    with open("./dist/vector-vein/version.txt", "w") as f:
        f.write(version)
    with open("./dist/vector-vein/DEBUG", "w") as f:
        f.write("1")

    # Copy migrations to dist/vector-vein/migrations
    migrations_path = Path("./migrations")
    if migrations_path.exists():
        dist_migrations_path = Path("./dist/vector-vein/migrations")
        if dist_migrations_path.exists():
            shutil.rmtree(dist_migrations_path)
        shutil.copytree(migrations_path, dist_migrations_path)


def build_frontend():
    if os.name == "nt":
        split = True
    else:
        split = False
    run_cmd("cd '../frontend' && pnpm run build", split=split)
    web_path = Path("./web")
    if web_path.exists():
        shutil.rmtree(web_path)
    web_path.mkdir()
    # 遍历../frontend/dist并将所有文件按路径复制到./web
    for file_path in Path("../frontend/dist").rglob("*"):
        if file_path.is_file():
            target_file_path = Path("./web") / file_path.relative_to("../frontend/dist")
            if not target_file_path.parent.exists():
                target_file_path.parent.mkdir(parents=True)
            shutil.copy(file_path, target_file_path)
    # 遍历../frontend/src/assets/并将所有文件按路径复制到./web/assets/
    for file_path in Path("../frontend/src/assets/").rglob("*"):
        if file_path.is_file():
            target_file_path = Path("./web/assets/") / file_path.relative_to("../frontend/src/assets/")
            if not target_file_path.parent.exists():
                target_file_path.parent.mkdir(parents=True)
            shutil.copy(file_path, target_file_path)


parser = argparse.ArgumentParser(description="Build software.")
parser.add_argument(
    "-v", "--version", default=os.getenv("VECTORVEIN_VERSION", "0.0.1"), help="version number, default: 0.0.1"
)
parser.add_argument(
    "-t", "--type", default="production", help="build type: development(d) or production(p) or frontend(f)"
)
args = parser.parse_args()
if args.type == "p" or args.type == "production":
    build_production(args.version)
elif args.type == "d" or args.type == "development":
    build_development(args.version)
elif args.type == "f" or args.type == "frontend":
    build_frontend()
