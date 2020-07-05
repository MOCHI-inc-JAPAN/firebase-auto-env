Automatic conversion .env file to firebase key value arguments and deployment of env variables.

# Usage

add package.json devDependencies.

```
  "firebase-auto-env": "github:MOCHI-inc-JAPAN/firebase-auto-env#v1.0.0"
```

and run

```
npx faenv [$pathOfEnvFile, $firebaseEnvironmentPrimaryNameSpace]
```

# Options

* $pathOfEnvFile: (default: .env)
* $firebaseEnvironmentPrimaryNameSpace: (default: name field in package.json)

# Example

in .env

```
EXAMPLE_TEST_KEY=test
EXAMPLE_TEST_VALUE=test
```

```
node ./bin/index.js .env hosting

# runs
firebase functions:config:set hosting.example_test_key=test hosting.example_test_value=test
```
