import {
  AvatarIcon,
  ChevronLeftIcon,
  GearIcon,
  HomeIcon,
  ImageIcon,
} from "@radix-ui/react-icons";
import {
  Calendar,
  Home,
  Menu,
  Mic,
  Projector,
  Swords,
  Users,
} from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: Mic,
  home: Home,
  projects: Projector,
  battles: Swords,
  artists: Users,
  events: Calendar,
  menu: Menu,
  dashboard: HomeIcon,
  avatar: AvatarIcon,
  placeholder: ImageIcon,
  settings: GearIcon,
  chevronLeft: ChevronLeftIcon,
};
