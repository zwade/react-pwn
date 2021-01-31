# React Pwn

`react-pwn` is a lightweight UI kit for making CTF problems. It's not particularly interesting, other than the fact that it can be reused across different problems, and looks nicer than bootstrap.

If you're looking at this as part of your problem analysis, you should be able to safely assume that this library is bug-free. (It may not be, but I intend to keep it as bug free as possible).

## Documentation

TODO once I'm done making problems

## Contribution

Feel free to contribute. If you want to add new components, I ask that they follow these guidelines

 - They should not be problem specific (i.e. a scrollable list component would fine, but a "note" list would be too specific)
 - They should be bug free (to the best of your knowledge -- this is a UI framework, not part of the problem itself)
 - They should follow the basic style used in this package
   - [] Components grouped in folders
   - [] Functional components where possible
   - [] Styles reference the palette, not specific values
   - [] No unpredictable state
   - [] Readable code

## Credit

This library is maintained by Zach Wade (zwad3) of the Plaid Parliament of Pwning.

All code is available under an MIT license.

