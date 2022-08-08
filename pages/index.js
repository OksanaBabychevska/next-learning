import Link from 'next/link';
import { MainLayout } from '../components/main-layout';

export default function Index(){
  return (
      <MainLayout title={'Home'}>
          <h1>Hello next.js</h1>
          <p><Link href='/posts'><a>Posts</a></Link></p>
          <p><Link href='/about'><a>About</a></Link></p>
      </MainLayout>

  )

}