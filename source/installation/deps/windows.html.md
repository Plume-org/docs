---
title: Dependencies on Windows
---

There are several packages that need to be installed before getting started compiling
Plume on Windows devices.

1. Download and install [Git-SCM](https://git-scm.com/downloads)
2. Download and install [Microsoft Visual Studio 2019](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=16)
3. 

    a. For SQLite Database:

    Install [Chocalatey](https://chocolatey.org/) using a PowerShell v2+ prompt:

    ```powershell
    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```

    b. For PostgreSQL:

    Download [PostgreSQL Binaries](https://www.enterprisedb.com/download-postgresql-binaries), extract to an easy place (i.e. `C:\Extra\pgsql`), and add the bin folder to your system path variable (which is needed to load the `libpq.dll` later on).

    To support the linker, add a `PQ_LIB_DIR` environment variable and point the postgres `lib`-folder to it (e.g. `C:\Extra\pgsql\lib`). Without this hint, the linker may stop with `LINK : fatal error LNK1181: cannot open input file 'libpq.lib'`

4. Download and install [OpenSSL](https://slproweb.com/products/Win32OpenSSL.html) (i.e. `C:\Extra\ssl`). If not done by installer, add the bin folder to your system path variable (plume and plm will need `libcrypto-3-x64.dll` and `libssl-3-x64.dll`)
5. Create new system variable called `OPENSSL_DIR` with a value of `C:\Extra\ssl` (or wherever you installed OpenSSL **NOTE**: this is _not_ to the bin folder, it must be to root to get the bin and lib folders!)
6. Download and install [LLVM (libclang)](http://releases.llvm.org/9.0.0/LLVM-9.0.0-win64.exe) (i.e. C:\Extra\LLVM)
7. Create new system variable called `LIBCLANG_PATH` with a value of `C:\Extra\LLVM\bin` (or wherever you installed LLVM to)
8. Currently, the build process depends on few Linux commands (e.g. `xargs`, `stat`, ...). These commands are not available in a normal Windows environment. The simplest workaround is to install [Cygwin](https://www.cygwin.com/install.html) and later run the `cargo` commands from the Cygwin terminal. A minimum package is sufficient. If this is not the case, the creation process panics with `thread 'main' panicked at 'failed xargs command: Error { kind: NotFound, message: "program not found" }', build.rs...`. These dependencies may be removed in future releases to simplify the build process again.
9. The build needs [GNUgettext](https://github.com/vslavik/gettext-tools-windows/releases) to support text resources and internationalization. Download the zip file and extract it (e.g. to `C:\Extra\gnugettext`). Add the `bin`-folder to your `PATH` environment variable (e.g. `C:\Extra\gnugettext\bin`). As an alternative the `gettext` package of Cygwin can be used. However, since the goal is not to have Cygwin as a mandatory installation for the build, it is recommended to install GNUgettext as Windows binaries. If you miss GNUgettext, you will run in errors on building with `wasm-pack` (because the makros `compile_i18n!()` and `include_i18n!()` will not work)
10. Reboot your PC to continue

Now that these dependencies have been installed, we need to install Rust which has a special installer.

<a class="action" href="../rust/">Let's do it!</a>
