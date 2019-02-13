---
title: Installing native dependencies
---

In order to be installed and to work correctly, Plume needs:

- *Git* (to get the code)
- *Curl* (for RustUp, the Rust installer)
- *GCC* and *make*  (to compile C dependencies)
- *PostgreSQL* or *SQlite 3 development files* (for the database)
- *GetText* (to manage translations)
- *Rust* and *Cargo* (to build the code)
- *OpenSSL* and *OpenSSL librairies* (for security)
- *pkg-config* (for openssl-sys compilation)

Depending on your operating system, the commands to get all these dependencies
are not the same, so we need to know what is installed on your machine to guide
you:

<ul class="choices">
  <li><a href="/installation/deps/deb">
    Debian, Ubuntu or another Linux ditribution based on DEB
  </a></li>
  <li><a href="/installation/deps/rpm">
    Fedora, RHEL, CentOS or another Linux ditribution based on DEB
  </a></li>
  <li><a href="/installation/deps/gentoo">
    Gentoo
  </a></li>
  <li><a href="/installation/deps/macosx">
    Mac OS X
  </a></li>
</ul>