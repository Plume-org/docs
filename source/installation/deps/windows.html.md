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

    Download [PostgreSQL Binaries](https://www.enterprisedb.com/download-postgresql-binaries), extract to an easy place (i.e. C:\Extra\pgsql), and add the bin folder to your system path variable.

4. Download and install [OpenSSL](https://slproweb.com/products/Win32OpenSSL.html) (i.e. C:\Extra\ssl)
5. Create new system variable called "OPENSSL_DIR" with a value of `C:\Extra\ssl` (or wherever you installed OpenSSL **NOTE**: this is _not_ to the bin folder, it must be to root to get the bin and lib folders!)
6. Download and install [LLVM (libclang)](http://releases.llvm.org/9.0.0/LLVM-9.0.0-win64.exe) (i.e. C:\Extra\LLVM)
7. Create new system variable called "LIBCLANG_PATH" with a value of `C:\Extra\LLVM\bin` (or wherever you installed LLVM to)
8. Reboot your PC to continue

Now that these dependencies have been installed, we need to install Rust which has a special installer.

<a class="action" href="../rust/">Let's do it!</a>
