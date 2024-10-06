import React, { useState } from 'react';

const Comment = () => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý dữ liệu sau khi submit, ví dụ như gửi đến API
        console.log({ comment, name, email, website, saveInfo });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '320px', marginLeft: '173px', marginRight: '190px' }}>
            <h3 style={{ color: '#ff6600', fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>WRITE A COMMENT</h3>
            <p style={{marginBottom: '10px'}}>Your email address will not be published. Required fields are marked *</p>

            <div style={{ marginBottom: '10px' }}>  
                <label htmlFor="comment"  >Comment *</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        height: '180px'
                    }}
                />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <div style={{ flex: 1 }}>
                    <label htmlFor="name">Name *</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                </div>

                <div style={{ flex: 1 }}>
                    <label htmlFor="email">Email *</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                </div>

                <div style={{ flex: 1 }}>
                    <label htmlFor="website">Website</label>
                    <input
                        id="website"
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                </div>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <input
                    type="checkbox"
                    id="saveInfo"
                    checked={saveInfo}
                    onChange={() => setSaveInfo(!saveInfo)}
                />
                <label htmlFor="saveInfo"> Save my name, email, and website in this browser for the next time I comment.</label>
            </div>

            <button
                type="submit"
                style={{
                    backgroundColor: '#ff6600',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    marginLeft: '980px',
                    cursor: 'pointer',
                    marginTop: '25px'
                }}
            >
                POST COMMENT
            </button>
        </form>
    );
};

export default Comment;
