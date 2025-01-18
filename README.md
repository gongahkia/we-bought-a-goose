![Static Badge](https://img.shields.io/badge/we_bought_a_goose_1.0-passing-green)

# We Bought A Goose

Browser extension that replaces all images on [eLearn-SMU](https://elearn.smu.edu.sg/) with geese.

<div align="center">
  <img height="400px" src="sample/we-bought-a-goose.jpg"></img>
</div>

## Screenshots

![](sample/we-bought-a-goose-usage.png)

## Installation

### CLI

```console
$ git clone https://github.com/gongahkia/we-bought-a-goose
$ cd we-bought-a-goose
$ make
```

### GUI

1. Click *Code*.

![](sample/goose-installation-1.png)

2. Click *Download ZIP*.

![](sample/goose-installation-2.png)

3. Unzip the ZIP file.

## Usage

### Firefox

1. Copy and paste this link in the search bar *about:debugging#/runtime/this-firefox*.
2. Click *load temporary add-on*.
3. Open the `we-bought-a-goose` repo, select `manifest.json`.
4. Open **SMU elearn**.
5. Click the goose.

### Chrome

1. Copy and paste this link in the search bar *chrome://extensions/*.
2. Toggle *Developer mode* on.
3. Click *load unpacked*.
4. Open the `we-bought-a-goose` repo, click *select*.
5. Open **SMU elearn**.
6. Click the goose.
