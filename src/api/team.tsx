import timg1 from "../images/teams/img-1.jpg";
import timg2 from "../images/teams/img-2.jpg";
import timg3 from "../images/teams/img-3.jpg";
import timg4 from "../images/teams/img-4.jpg";

export interface TeamMember {
  id: string;
  tImg: any;
  name: string;
  slug: string;
  title: string;
}

const Teams: TeamMember[] = [
  {
    id: "1",
    tImg: timg1,
    name: "Pavan Shimpi",
    slug: "pavan-shimpi",
    title: "Director & Chief Executive Officer",
  },
  {
    id: "2",
    tImg: timg2,
    name: "Tejaswini Koparde",
    slug: "tejaswini-koparde",
    title: "Chief Business Development Officer",
  },
  {
    id: "3",
    tImg: timg3,
    name: "Sanket Wani",
    slug: "sanket-wani",
    title: "Chief Marketing Officer",
  },
  {
    id: "4",
    tImg: timg4,
    name: "Jenefer Abram",
    slug: "Jenefer-Abram",
    title: "CEO",
  },
];

export default Teams;
