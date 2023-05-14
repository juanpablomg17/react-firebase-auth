import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./TokenDisplay.module.css";

const TokenDisplay = ({ token }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className={styles.token}>
      {token ? (
        <>
          <div className={styles.tokenValue}>{token}</div>
          <CopyToClipboard text={token} onCopy={handleCopy}>
            <button className={styles.copyButton}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </>
      ) : (
        <div className={styles.getTokenButton}>No token available</div>
      )}
    </div>
  );
};

export default TokenDisplay;