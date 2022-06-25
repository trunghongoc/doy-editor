import { InputText } from '../../components/inputs/Text'
import { Permalink } from '../../components/Permalink'
import { Button } from '../../components/Button'

import { QuillEditor } from '../../components/QuillEditor'
import { Card } from '../../components/Card'

import s from './style.module.scss'

export const CreatePost = (): JSX.Element => {
  return (
    <div className={s.page}>
      <div className={s.left}>
        <InputText label="Page title" placeholder="Title" isRequired={true} />

        <div className={s.permalink}>
          <Permalink />
        </div>

        <div className={s.addMedia}>
          <Button>Add media</Button>
        </div>

        <div className={s.quill}>
          <QuillEditor />
        </div>
      </div>

      <div className={s.right}>
        <Card>
          <div slot="header">Publish</div>
          <div slot="body">
            <div className="header">
              <button>Save Draft</button>
              <button>Preview</button>
            </div>

            <div>
              Status: Draft <a href="/">Edit</a>
            </div>

            <div>
              Visibility: Public <a href="/">Edit</a>
            </div>

            <div>
              Visibility: Public <a href="/">Edit</a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
