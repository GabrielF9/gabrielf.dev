import Loader from '@/common/Loader';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return <Loader />;
};

export default NotFound;
