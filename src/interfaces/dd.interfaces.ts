export default interface Dd {
    _id?: string;
    count: number;
    type: ETypeDd.T | ETypeDd.b
    button: ETypeButton.NO | ETypeButton.SI;
    current_one: number;
    current_two: number;
    current_trhee: number;
    current_four: number;
    current_five: number;
    //if someone of currents are bad, this state is "MAl"
    state: string
}

export enum ETypeDd {
    T = "tetrapolar",
    b = "bipolar"
}
 export enum ETypeButton {
    SI = "SI",
    NO = "NO"
 }

// const a: Dd = {
//     count: 23,
//     current_one: "awdawd",
//     type: ETypeDd.T,
// }

// a

// 1	Tetrapolar	SI	>300	>300	>150	>40	>30	30 mA	Mal
