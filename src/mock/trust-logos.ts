import vertexLabs from "@/assets/logos/vertex-labs.svg";
import halcyon from "@/assets/logos/halcyon.svg";
import ridgeway from "@/assets/logos/ridgeway.svg";
import formation from "@/assets/logos/formation.svg";
import copperline from "@/assets/logos/copperline.svg";

export interface TrustLogo {
  name: string;
  src: string;
}

export const trustLogos: TrustLogo[] = [
  {
    name: "Vertex Labs",
    src: vertexLabs,
  },
  {
    name: "Halcyon",
    src: halcyon,
  },
  {
    name: "Ridgeway",
    src: ridgeway,
  },
  {
    name: "Formation",
    src: formation,
  },
  {
    name: "Copperline",
    src: copperline,
  },
];
