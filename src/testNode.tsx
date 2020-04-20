/** @format */

import React, {useState} from 'react'

const testReactNode: React.FC = () => {
  const [age, setAge] = useState<number>(20)
  const [name, setName] = useState<string>('hh')

  interface People {
    name: string
    age: number
    country?: string
  }

  const [owner, setOwner] = useState<People>({name: 'sda_sda', age: 5})
  const [members, setMembers] = useState<People[]>([
    {name: 'dasda_dasdasd', age: 12}
  ])

  function handleSetAge(num: number) {
    let res = num + age
    setAge(res)
  }
  function handleSetName(str: string) {
    let res = name + str
    setName(res)
  }
  function handleSetOwnerAction(type: string) {
    if (type === 'add') {
      setOwner({
        name: 'das_das',
        age: 18,
        country: 'china'
      })
    } else {
      setOwner({
        name: 'sda_sda',
        age: 5
      })
    }
  }
  function handleSetMemberAction(type: string, index?: number) {
    let newArr: People[] = []
    newArr = [...members]
    if (type === 'add') {
      let keyNew = 2
      newArr.push({
        name: 'wewew_' + keyNew,
        age: keyNew + 7,
        country: keyNew % 2 === 0 ? 'china' : ''
      })
      setMembers(newArr)
    } else {
      newArr.splice(index, 1)
      setMembers(newArr)
    }
  }

  return (
    <div style={{marginTop: '20px'}}>
      <div>
        <p
          onClick={() => {
            handleSetAge(1)
          }}>
          {age}
        </p>
        <p
          onClick={() => {
            handleSetName('_hh')
          }}>
          {name}
        </p>
        <p>
          {owner.name} && {owner.age}
          {owner.country && (
            <span>
              <span> && </span>
              <span>{owner.country}</span>
            </span>
          )}
          <a
            style={{
              marginLeft: '30px',
              border: '1px solid #2196f3',
              backgroundColor: '#2196f3',
              borderRadius: '4px',
              padding: '4px 12px',
              color: '#fff'
            }}
            onClick={() => {
              handleSetOwnerAction('add')
            }}>
            add
          </a>
          <a
            style={{
              marginLeft: '20px',
              border: '1px solid #ff5252',
              backgroundColor: '#ff5252',
              borderRadius: '4px',
              padding: '4px 12px',
              color: '#fff'
            }}
            onClick={() => {
              handleSetOwnerAction('del')
            }}>
            del
          </a>
        </p>
        <div
          style={{
            marginTop: '24px'
          }}>
          <a
            style={{
              border: '1px solid #2196f3',
              backgroundColor: '#2196f3',
              borderRadius: '4px',
              padding: '4px 12px',
              color: '#fff'
            }}
            onClick={() => {
              handleSetMemberAction('add')
            }}>
            add
          </a>
        </div>
        {members &&
          members.map((item, index) => {
            return (
              <div key={index} style={{marginTop: '24px'}}>
                <span>{index + 1}. </span>
                <span>{item.name} </span>
                <span>{item.age} </span>
                <span>{item.country ? item.country : ''} </span>

                {index > 0 && (
                  <a
                    style={{
                      marginLeft: '20px',
                      border: '1px solid #ff5252',
                      backgroundColor: '#ff5252',
                      borderRadius: '4px',
                      padding: '4px 12px',
                      color: '#fff'
                    }}
                    onClick={() => {
                      handleSetMemberAction('del', index)
                    }}>
                    del
                  </a>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}
export default testReactNode
