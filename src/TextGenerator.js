// TextGenerator.js
import React, { useState } from 'react';
import './TextGenerator.css';

const TextGenerator = () => {
    const [subject, setSubject] = useState('宿儺');
    const [object1, setObject1] = useState('十影');
    const [object2, setObject2] = useState('時間');
    const [object3, setObject3] = useState('疾病');

    const generateText = () => `${subject}太強了
而且${subject}還沒有使出全力的樣子
對方就算沒有${object1}也會贏
我甚至覺得有點對不起他
我沒能讓${subject}展現他的全部給我
殺死我的不是${object2}或${object3}
而是比我更強的傢伙，真是太好了`;

    const handleCopyToClipboard = () => {
        const textToCopy = generateText();
        // 使用 navigator.clipboard.writeText 複製到剪貼簿
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // 複製成功時的提示
                alert('成功複製到剪貼簿');
            })
            .catch((error) => {
                // 複製失敗時的提示
                console.error('複製失敗', error);
                alert('複製失敗，請手動複製');
            });
    };

    return (
        <div className="text-generator">
            <h2>五條體產生器</h2>
            <p>{generateText()}</p>
            <form>
                {['宿儺', '十影', '時間', '疾病'].map((label, index) => (
                    <label key={index}>
                        {label}：
                        <input
                            type="text"
                            value={index === 0 ? subject : index === 1 ? object1 : index === 2 ? object2 : object3}
                            onChange={(e) =>
                                index === 0
                                    ? setSubject(e.target.value)
                                    : index === 1
                                        ? setObject1(e.target.value)
                                        : index === 2
                                            ? setObject2(e.target.value)
                                            : setObject3(e.target.value)
                            }
                        />
                    </label>
                ))}
            </form>
            <button onClick={handleCopyToClipboard}>太好了</button>
        </div>
    );
};

export default TextGenerator;
