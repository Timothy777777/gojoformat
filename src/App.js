import React from 'react';
import './App.css';
import TextGenerator from './TextGenerator';

function App() {
  const Logo = 'https://i4.disp.cc/imgur/HCYFsHq.png';

  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo rotate"> {/* 新增了 rotate 類別 */}
          <img
            src={Logo}
            width={'200px'}
            alt='I am B'
          />
        </div>
        <TextGenerator />
        <p>
          凡夫
        </p>
        <a
          className="App-link"
          href="https://pic.iyingdi.com/post/content/2023/09/22/16631488/b55805ce-f260-45ac-9714-a2ddeffa4379.png?imageMogr2/format/jpg|imageMogr2/quality/70"
          target="_blank"
          rel="noopener noreferrer"
        >
          2.5條 啟動
        </a>
      </header>

    </div>
  );

}

export default App;
