import { UploadForm } from "../styles/Form.Styled"
import { FlexColumn, FlexRow } from "../styles/Container.Styled"
import { Button } from "../styles/Button.Styled"
import PropTypes from "prop-types";

export default function SkillForm({ onSubmit }) {
  return (
    <UploadForm onSubmit={e => onSubmit(e)}>
      <FlexColumn>
        <label htmlFor="icon">Icon</label>
        <input type="text" name="icon_class_name" id="icon" />
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

SkillForm.propTypes = {
  onSubmit: PropTypes.func
}