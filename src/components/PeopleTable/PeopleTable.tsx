import clsx from "clsx";
import type { Person } from "../../@types/people";
import style from './PeopleTable.module.css';

type PeopleTableProps = {
    people: Person[]
}
export default function PeopleTable({ people }: PeopleTableProps) {

    return (
        <table className={style['people-table']}>
            <PeopleTableHead />
            <tbody>
                {people.map(person => (
                    <PeopleTableRow key={person.id} person={person} />
                ))}
            </tbody>
        </table>
    )
}

type PeopleTableRowProps = {
    person: Person
}
function PeopleTableRow({ person }: PeopleTableRowProps) {

    // <tr className={style['people-row'] + ' ' + ((person.birthdate.getFullYear() < 2000) ? style['color-pink'] : '')}>
    // ↓ clsx
    // <tr className={clsx(style['people-row'], (person.birthdate.getFullYear() < 2000) && style['color-pink'])}>
    
    return (
        <tr className={clsx(style['people-row'], (person.birthdate.getFullYear() < 2000) && style['color-pink'])}>
            <td>{person.firstname}</td>
            <td>{person.lastname}</td>
            <td>{person.birthdate.toLocaleDateString('fr-be', { dateStyle: 'long' })}</td>
        </tr>
    )
}

function PeopleTableHead() {
    return (
        <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Date de naissance</th>
            </tr>
        </thead>
    )
}
