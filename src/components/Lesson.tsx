import { CheckCircle } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string; // Essa property vem do componente parent que chama Lesson
  availableAt: Date;
  type: 'live' | 'class';
}


export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>(); // Esse param ven da URI

  const [isLessonAvailable, setIsLessonAvailable] = useState(isPast(props.availableAt));
  const availiableDateFormat = format(props.availableAt, "EEEE ' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR });
  const isLessonSelected = slug === props.slug;


  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availiableDateFormat}
      </span>
      <div
        className={`mt-2 py-4 px-3.5 bg-transparent rounded border 
        border-gray-500 flex flex-col group-hover:border-green-400 
        ${isLessonSelected ? 'bg-green-500' : ''}`
        }>
        <header className="flex flex-row items-center justify-between mb-6">
          {isLessonAvailable ? (
            <span className={classNames("font-medium text-blue-500 text-sm flex items-center gap-2", {
              'text-white': isLessonSelected,
              'text-blue-500': !isLessonSelected,
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="font-medium text-orange-500 text-sm flex items-center gap-2">
              <CheckCircle size={20} />
              Em breve
            </span>
          )}
          <span className={classNames("font-bold py-[0.125rem] px-2 border rounded text-xs", {
            'border-white': isLessonSelected,
            'border-gree-300': !isLessonSelected,
            'text-white': isLessonSelected,
            'text-green-600': !isLessonSelected,
          })}>
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={classNames('mt-0.5 block', {
          'text-white': isLessonSelected,
          'text-gray-200': !isLessonSelected,
        })}>{props.title}</strong>
      </div>
    </Link>
  );
}
