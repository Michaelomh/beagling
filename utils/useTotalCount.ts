/**
 * A react hook to get the total count from any list.
 *
 * This hook allows you to pass a list of any type, and return
 *
 * @template T - the object or number in the list.
 * @params
 * @returns total count based on user params
 *
 * IN COMPLETE FOR NOW.
 */
export default function useTotalCount<T extends any[] | number[]>(list: T, params?: useTotalCountProps): number {
  // for number[]
  return getSum(list)
}

const getSum = (list: number[]): number => {
  let total = 0
  for (const i in list) {
    total += parseInt(i)
  }
  return total
}

type useTotalCountProps = {
  filter?: () => void
  key?: string
}

// get a list of numbers
// [optional] filters
// [optional] specific key in the list object
//  {
//   id: 1,
//   count: 20,
//   date: 15th Jul
// }
// count
//
// [ sum ]
