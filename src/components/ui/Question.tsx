import { useState } from 'react'
import { LiaMinusSolid } from 'react-icons/lia'
import { TfiPlus } from 'react-icons/tfi'

interface Props {
  title?: string
  content?: Array<any>
}

const ExpandableComponent = ({ title, content }: Props) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="mb-[4px] flex flex-col  border-b-2 border-b-[#2c2c2c] text-left md:mx-5">
      <header className="flex cursor-pointer justify-between pt-4 text-xl font-semibold ">
        <h4 onClick={() => setExpanded(!expanded)} className="question-title text-lg md:pr-5">
          {title}
        </h4>
        <button className="bg-transparent" onClick={() => setExpanded(!expanded)}>
          {expanded ? <LiaMinusSolid size={20} /> : <TfiPlus size={20} />}
        </button>
      </header>

      {content && content.length > 0 && (
        <div
          className={`overflow-hidden border-b-DEFAULT border-[#777]/50 transition-all ${
            expanded ? 'max-h-[1000px] duration-1000' : 'max-h-0 duration-100 '
          }`}
        >
          <p className="mx-4 py-2 text-[1rem] font-[200]">
            {content.map((item, index) => (
              <span key={index}>
                {item.info}
                <br />
              </span>
            ))}
          </p>
        </div>
      )}
    </article>
  )
}

export default ExpandableComponent
