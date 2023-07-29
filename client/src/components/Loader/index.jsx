import LoaderContainer from "../styles/Loader.Styled";
import { SkillsLoaderContainer } from "../styles/Loader.Styled";

export default function LoaderSpinner() {
  return <LoaderContainer><div></div></LoaderContainer>
}

export function SkillsLoader() {
  return <SkillsLoaderContainer><div></div></SkillsLoaderContainer>
}