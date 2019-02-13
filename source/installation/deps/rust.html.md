---
title: Installing Rust & Cargo
---

TODO: instructions to choose the correct nightly directly?

Rust and Cargo use a special installer called *RustUp* that let's you manage
various versions of these two programs in parallel.

You can eventually create a specific user for your Rust and Plume installations, to
isolate them from the rest of your system. This step is recommended if you are in
a **production environment**, but it is not necessary.

```bash
adduser plume
su - plume
cd ~
```

You can now install RustUp on **GNU/Linux** and **Mac OS X** with:

```bash
curl https://sh.rustup.rs -sSf | sh
```

When asked, choose the *"1) Proceed with installation (default)"* option.

Then run this command to be able to run cargo in the current session:

```bash
export PATH="$PATH:/home/plume/.cargo/bin:/home/plume/.local/bin:/usr/local/sbin"
```

On **Windows**, you'll need, if you don't already have them, to download and
install the [Visual C++ 2015 Build Tools](https://www.microsoft.com/en-us/download/details.aspx?id=48159).
Then, download the [rustup installer](https://www.rust-lang.org/en-US/install.html)
and run it.

You can check that everything is correctly installed with `rustc --version` and
`cargo --version`.

We can now compile Plume's source code.

<a class="action" href="/installation/with/source-code">Compiling Plume</a>