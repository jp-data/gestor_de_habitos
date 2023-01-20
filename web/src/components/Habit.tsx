interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return (
        <div className='bg-zinc-900 w-44 h-20 text-center text-white'>{props.completed}</div>
    )
}