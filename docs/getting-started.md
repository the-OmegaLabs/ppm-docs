# Getting Started

## System Requirements

- A Linux distribution that supports the `dpkg` format.
- If you are using the Concept Version of Plusto Package Manager, please ensure that Python 3 and `pip` are installed (we do not currently provide an install script, so please bear with us).

## Installation

### 1. Install Required Python Packages

Before proceeding, make sure you have the necessary Python packages. You can install them using your package manager or via `pip`:

```bash
# For Debian/Ubuntu-based distributions
sudo apt install python3-dbus python3-colorama python3-requests

# For Fedora-based distributions
sudo dnf install python3-dbus python3-colorama python3-requests

# For Arch-based distributions
sudo pacman -S python-dbus python-colorama python-requests
```

Alternatively, you can use `pip` if you prefer to install these packages manually:
```bash
pip install colorama>=0.4.6 dbus-python>=1.3.2 requests>=2.32.3
```

### 2. Clone the Repository and Install PPM

After installing the required dependencies, clone the repository and create a symbolic link for easy access to the `ppm` command.

```bash
# Clone the repository to /opt/ppm
sudo git clone https://github.com/Stevesuk0/ppm.git /opt/ppm

# Create a symbolic link for ppm
sudo ln -sf /opt/ppm/launcher.py /usr/bin/ppm
```

### 3. Run the Installation Script

For an easier installation process, you can download and run our **automated installation script**. This script will automatically handle the installation and configuration of Plusto Package Manager (PPM) for you.

#### Script Installation Steps:

1. **Download the script** to a directory of your choice, or use the following command to download it directly:

```bash
wget https://github.com/Stevesuk0/ppm/raw/main/ppm.mom/install.sh -O i.sh
```

2. **Make the script executable**:

```bash
chmod +x i.sh
```

3. **Run the script** to begin the installation:

```bash
sudo ./i.sh
```

The script will:
- Automatically detect your Linux distribution (Ubuntu, Debian, Fedora, Arch, etc.).
- Install necessary dependencies.
- Clone the repository to a specified directory.
- Set up symbolic links and initialize the PPM configuration.

### 4. Verify the Installation

Once the installation script completes, verify the installation by running the following command:

```bash
ppm --init
```

You should see the following output, indicating that the configuration file has been initialized:

```txt
[example@example-system ~]# ppm --init
ppm 0.1
## The configuration file has been initialized.
```

If you see this message, you have successfully completed the installation and configuration of PPM.

## Troubleshooting

If you encounter any issues, make sure that:
- You have Python 3 and `pip` installed.
- All dependencies are installed correctly.
- Your system has internet access to clone the repository from GitHub.

For further assistance, you can check the official PPM documentation or contact the support team.

---

This guide provides an easy-to-follow process to get Plusto Package Manager up and running. Enjoy managing your packages with PPM!
