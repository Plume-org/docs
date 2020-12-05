---
title: Compiling from source
---

The first step to compile Plume's source code is to get it.

```bash
git clone https://git.joinplu.me/Plume/Plume.git
cd Plume
```

Then, you'll need to install Plume and the CLI tools to manage your instance.
Run the following commands.

For **GNU/Linux** and **Mac OS X**:

```bash
# Build the front-end
cargo install cargo-web
cargo web deploy -p plume-front --release

# Build the back-end, replacing DATABASE either with
# postgres or sqlite depending on what you want to use
cargo install --no-default-features --features DATABASE --path .

# Build plm, the CLI helper, replacing DATABASE again
cargo install --no-default-features --features DATABASE --path plume-cli

```

Since v0.5.0, Plume supports [Lindera](https://github.com/lindera-morphology/lindera), a Japanese morphological analysis library for Japanese search. If you want to use it, pass `search-lindera` to `--features` option to build both plume and plume-cli:

```bash
cargo install --no-default-features --features DATABASE,search-lindera
cargo install --no-default-features --features DATABASE,search-lindera --path plume-cli
```

And then, you can configure Plume by `SEARCH_TAG_TOKENIZER`, `SEARCH_CONTENT_TOKENIZER` and/or `SEARCH_LANG` environment variables. See [Useful Environment Variables](/environment/) for details.

For **Windows**, if you are going to use SQLite, launch an additional cmd.exe as admin and do the following:

```
# Install, compile, and convert SQLite using chocolatey

choco install sqlite
cd C:\ProgramData\chocolatey\lib\SQLite\tools
"C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\VC\Auxiliary\Build\vcvarsall.bat" x86_amd64
lib /MACHINE:x64 /def:sqlite3.def /out:sqlite3.lib

# Copy sqlite3.lib to where you installed RustUp 
copy C:\ProgramData\chocolatey\lib\SQLite\tools\sqlite3.lib C:\Users\%USERNAME%\.rustup\toolchains\stable-x86_64-pc-windows-msvc\lib\rustlib\x86_64-pc-windows-msvc\lib\sqlite3.lib
```

You may close that cmd.exe window and proceed with your regularly scheduled installation. Remember to replace DATABASE
with postgres or sqlite depending on what you want to use:

```
# Install diesel_cli 
cargo +stable install diesel_cli --no-default-features --features DATABASE --version '=1.3.0' --verbose

# Build the front-end
cargo install cargo-web
cargo web deploy -p plume-front --release

# If using SQLite, copy sqlite3.lib from the stable version of RustUp to the nightly that was just installed
copy C:\Users\%USERNAME%\.rustup\toolchains\stable-x86_64-pc-windows-msvc\lib\rustlib\x86_64-pc-windows-msvc\lib\sqlite3.lib C:\Users\%USERNAME%\.rustup\toolchains\nightly-2020-01-15-x86_64-pc-windows-msvc\lib\rustlib\x86_64-pc-windows-msvc\lib\sqlite3.lib

# Build the back-end, replacing DATABASE either with
# postgres or sqlite depending on what you want to use
cargo install --no-default-features --features DATABASE --path .

# Build plm, the CLI helper, replacing DATABASE again
cargo install --no-default-features --features DATABASE --path plume-cli
```

These commands can take a long time to run and use quite a lot of resources.

Once it's done, you can configure your instance.

<a class="action" href="/installation/config">Configuration</a>
