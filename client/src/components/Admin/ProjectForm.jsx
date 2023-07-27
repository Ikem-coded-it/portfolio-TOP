import { UploadForm } from "../styles/Form.Styled";
import { FlexColumn, FlexRow } from "../styles/Container.Styled";
import { Button } from "../styles/Button.Styled";
import PropTypes from 'prop-types';

export default function ProjectForm({ onSubmit }) {
  return (
    <UploadForm onSubmit={e => onSubmit(e)}>
      <FlexColumn width="100%" gap="10px">
        <label htmlFor="title">Project Title</label>
        <input 
        type="text" 
        id="title" 
        name="title"
        />
      </FlexColumn>

      <FlexColumn width="100%" gap="10px">
        <label htmlFor="description">Project Description</label>
        <textarea 
          id="description" 
          name="description"
        ></textarea>
      </FlexColumn>

      <FlexColumn width="100%" gap="10px">
        <label htmlFor="live_url">Live URL</label>
        <input 
          type="url" 
          id="live_url" 
          name="live_url"
        />
      </FlexColumn>

      <FlexColumn width="100%" gap="10px">
        <label htmlFor="code_url">Code URL</label>
        <input 
          type="url" 
          id="code_url" 
          name="code_url"
        />
      </FlexColumn>

      <FlexColumn width="100%" gap="10px">
        <label htmlFor="screenshot">Screenshot</label>
        <input 
        type="file" 
        id="screenshot" 
        name="screenshot" 
        accept=".jpg, .png, .jpeg"
        />
      </FlexColumn>

      <FlexRow width="100%" gap="10px">
        <Button type="submit">Upload Project</Button>
      </FlexRow>
    </UploadForm>

  )
}

ProjectForm.propTypes = {
  onSubmit: PropTypes.func
}