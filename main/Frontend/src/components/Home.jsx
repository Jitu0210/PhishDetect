import { useState } from 'react';
import axios from 'axios';

const LinkForm = () => {
    const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        try {
            const response = await axios.post('http://localhost:3001/check-link', { link });
            console.log(response.data.message); // Log success message
        } catch (error) {
            console.error('Error submitting link:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="link">Enter a Link:</label>
                <input
                    type="url"
                    id="link"
                    name="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)} // Update state on input change
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LinkForm;
