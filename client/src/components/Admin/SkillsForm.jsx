import { UploadForm } from "../styles/Form.Styled"
import { FlexColumn, FlexRow } from "../styles/Container.Styled"
import { Button } from "../styles/Button.Styled"

export default function SkillForm() {
  return (
    <UploadForm>
      <FlexColumn>
        <label htmlFor="icon">Icon</label>
        <input type="text" name="icon" id="icon" />
      </FlexColumn>
      <FlexColumn>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </FlexColumn>
      <FlexRow>
        <Button type="submit">Upload skill</Button>
      </FlexRow>
    </UploadForm>
  )
}