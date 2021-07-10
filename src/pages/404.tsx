import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { Loader } from '../common/Loader';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return <></>;
};

export default NotFound;
