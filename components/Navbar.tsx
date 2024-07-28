import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const navigation: {
  link: string, 
  description: string, 
  title: string
id: number}[] = [
  {
    link: '/',
    description:'Home page',
    title:"Home",
    id: 1
  },
  {
  link: 'server-action',
  description:'Premier test de serveur action',
  title:"Server Action",
  id: 2
},
{
  link: 'server-action-tanstack', 
  description:'Premier test de serveur action avec Tanstack Query',
  title:"Server Action Tanstack",
  id: 3
}
]


const NavBar = () => {


  return (
    <div className="flex gap-4 flex-wrap">

      {
        navigation.map((element) => {
  
          return (
            <div key={element.id} >

                <Link href={element.link}>
            <Card className="w-52 max-w-52 h-32 ">
              <CardHeader className="p-2">
                <CardTitle>
                  {element.title}
                </CardTitle>
                <CardDescription>
                  {element.description}
                </CardDescription>
              </CardHeader>
              {/* <CardFooter> */}
                {/* <Button>
                  {"Go"}
                </Button> */}
              {/* </CardFooter> */}
            </Card>
                </Link>
            </div>
      
          )
        })
      }
    </div>
  );
};

export default NavBar;

