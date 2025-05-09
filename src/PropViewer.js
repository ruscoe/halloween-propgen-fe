import React, { useEffect, useState } from 'react';

function PropViewer() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/prop')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching prop:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading prop...</p>;
    if (!data) return <p>Server unavailable.</p>;

    return (
        <section id="prop">
            <p>The <span class="strong">{data.name}</span></p>
            <p>is a <span class="strong">{data.type}</span> Prop!</p>
        </section>
    );
}

export default PropViewer;
