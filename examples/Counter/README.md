# Counter Example

Assuming you already have react-native and elm setup. From the command 
line run in the examples directory (not this directory!):

```bash
$ react-native init Counter
```

Using git revert the changes react-native made to the package.json file 
and run:

```bash
$ cd Counter
$ npm run compile 
```

finally:

```bash
$ react-native run-ios 
```
