import { redirect } from 'next/navigation';
import { stackServerApp } from '../stack';

export default async function Home() {
  const user = await stackServerApp.getUser();

  if (user) {
    console.log("haha");
    redirect('/tools');
  }
  redirect('/handler/signup');
}
