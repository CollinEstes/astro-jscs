# astro-jscs
Astro module for running jscs style checking


### USAGE

```
$cd anyJSProject
anyJSProject$ astro jscs
```

### .jscsrc
Currently astro-jscs requires your project to have a .jscrc configuration file.

## Options

### --fix

Will auto-fix errors of a certain type, for more information see the [jscs documentation](http://jscs.info/overview.html)

### --esnext

Set esnext for ES6 projects

### --preset

Set to use a predefined rules for specific code style, for more information see the [jscs documentation](http://jscs.info/overview.html)


## Want options?

[Submit a PR or open an issue](https://github.com/CollinEstes/astro-jshint)