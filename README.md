
# Parliament.uk-pugin-composition
[Parliament.uk-pugin-composition][parliament.uk-pugin-composition] is a [Node][node] application designed to provide developers the ability to work with [Pugin][parliament.uk-pugin].

### Contents
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Pugin Composition Application](#pugin-composition-application)
  - [Running the application](#running-the-application)
  - [Running tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Requirements
[Parliament.uk-pugin-composition][parliament.uk-pugin-composition] requires the following:
* [Node][node]
* [Pug cli][pug-cli]


## Getting Started
Clone the repository:
```bash
git clone https://github.com/ukparliament/Parliament.uk-pugin-composition.git
cd Parliament.uk-pugin-composition
```

## Pugin Composition Application
The [Parliament.uk-composition][parliament.uk-pugin-composition] application inherits [pugin][parliament.uk-pugin]; the [parliament.uk][parliament.uk] brand, its components and mixins enabling rapid prototyping and consistent branding across Parliamentary projects.

### Running the application
To run the application locally, run:
```bash
npm install
npm start
```

### Running tests
We run the following tests:
* [Pally][pally] for Accessibility testing
* [Valimate][valimate] for HTML validation
* [Saucelabs][saucelabs] for browser/device testing

To run [Pally][pally] and [Valimate][valimate]:
```bash
make test
```

You can use our automated web testing application [Parliament.uk-awt][parliament.uk-awt] for testing in [Saucelabs][saucelabs].

## Contributing
If you wish to submit a bug fix or feature, you can create a pull request and it will be merged pending a code review.

1. Fork the repository
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Ensure your changes are tested using [Pally][pally], [Valimate][valimate] and [Saucelabs][saucelabs]
6. Create a new Pull Request

## License
[Parliament.uk-pugin-composition][parliament.uk-pugin-composition] is available as open source under the terms of the [Open Parliament Licence][info-license].

[parliament.uk-pugin-composition]:https://github.com/ukparliament/parliament.uk-pugin-composition
[parliamentary-digital-service]:	https://github.com/ukparliament
[parliament.uk]:									http://www.parliament.uk/
[parliament.uk-pugin]:						https://github.com/ukparliament/parliament.uk-pugin
[parliament.uk-awt]:							https://github.com/ukparliament/parliament.uk-awt
[node]:														https://nodejs.org/en/
[pug-cli]:         		  					https://github.com/pugjs/pug-cli
[pally]:													https://github.com/pa11y/pa11y
[saucelabs]:											https://saucelabs.com/
[valimate]:												https://github.com/jamesseanwright/valimate

[info-license]:   http://www.parliament.uk/site-information/copyright/open-parliament-licence/
[shield-license]: https://img.shields.io/badge/license-Open%20Parliament%20Licence-blue.svg
