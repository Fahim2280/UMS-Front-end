import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function SessionCheck ({ children }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const session = sessionStorage.getItem('email');
        if (!session) {
          router.push('http://localhost:7000/student/login');
        } else {
          setLoading(false);
        }
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }

    return children;
};
