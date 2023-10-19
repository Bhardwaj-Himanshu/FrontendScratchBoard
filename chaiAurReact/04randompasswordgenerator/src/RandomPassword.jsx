import { useCallback, useState, useEffect, useRef } from 'react';

const RandomPassword = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const randomPasswordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx';

    if (numberAllowed) {
      str += '0123456789';
    } else if (charAllowed) {
      str += '!@#$%^&*()_+-={}';
    }

    for (let i = 0; i < length; i++) {
      let indexOfChar = Math.floor(Math.random() * str.length);
      pass += str[indexOfChar];
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copytoClipboard = () => {
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    randomPasswordGenerator();
  }, [length, numberAllowed, charAllowed, randomPasswordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            value={password}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copytoClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed(!numberAllowed);
                // console.log(!numberAllowed);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              checked={charAllowed}
              onChange={() => {
                setCharAllowed(!charAllowed);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};
export default RandomPassword;
