# Getting Started

## System Requirements

- A Linux distribution that supports the `dpkg` format.
- If you are using the Concept Version of Plusto Package Manager, please ensure that Python 3 and pip are installed (we do not currently provide an install script, so please bear with us).

## Installation

Install these python package we need:
```
colorama       >= 0.4.6
dbus-python    >= 1.3.2
requests       >= 2.32.3
```
They are in pypi or your linux distro repos.
install them such like:

::: details Debian/Ubuntu
```bash
sudo apt install python3-dbus python3-colorama python3-requests
```
:::

::: details Fedora
```bash
sudo dnf install python3-dbus python3-colorama python3-requests
```
:::

::: details Arch Linux
```bash
sudo pacman -S python-dbus python-colorama python-requests
```
:::

Clone the repository and create a symbolic link:

```bash
sudo git clone https://github.com/Stevesuk0/ppm.git /opt/ppm
sudo ln -sf /opt/ppm/launcher.py /usr/bin/ppm
```
Then you can type `ppm --init` to verify the install.

If you see this information, it means you have completed the installation and configuration of ppm.

```txt{3}
[example@example-system ~]# ppm --init
ppm 0.1
## The configuration file has been initialized. // [!code focus]
```