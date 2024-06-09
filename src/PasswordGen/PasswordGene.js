import React, { useState, useCallback, useEffect, useRef } from "react";

const PasswordGene = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef("");

  const passwordGene = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm";

    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += '!@#$%^&*()_+{}":<>?';

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed]);


  const passwordCopy = useCallback(()=>{
    passwordRef.current?.select() 
    window.navigator.clipboard.writeText(password)
    console.log('clicked')
  }, [password]

)

  useEffect(() => {
    passwordGene();
  }, []);

  return (
    <div>
      <h1>Hey, I'm a Password Generator!</h1>
      <div>
        <input
          type="text"
          placeholder="Password"
          readOnly
          value={password}
          ref={passwordRef}
        />
        <button onClick={passwordCopy}>Copy</button>
        <br />
        <input
          type="range"
          onChange={(e) => {
            setLength(parseInt(e.target.value));
          }}
          value={length}
          placeholder="Length of Pass"
          min={8}
          max={15}
        />
        <br />
        <label>Length:{length}</label>
      </div>
      <input
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={(e) => {
          setNumberAllowed(e.target.checked);
        }}
        value={length}
      />
      <label>Numbers</label>

      <br />
      <input
        type="checkbox"
        defaultChecked={charactersAllowed}
        onChange={(e) => {
          setCharactersAllowed(e.target.checked);
        }}
        value={length}
      />
      <label>Characters</label>

      <br />

      <button onClick={passwordGene}>Generate Password - Click Here</button>
    </div>
  );
};

export default PasswordGene;
