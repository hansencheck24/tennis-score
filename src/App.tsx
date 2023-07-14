import { type ReactNode, type FC, useState } from 'react'
import './App.css'

interface PlayerRowProps {
  name: string
  previousSets: number[] | null
  sets: number
  games: number
  points: number
}

interface BoxProps {
  type: 'prev-sets' | 'player' | 'current' | 'total'
  children: ReactNode
}

const Box: FC<BoxProps> = ({type, children}) => {
  return <div className={`box box--${type}`}>
    <div>{children}</div>
  </div>
}

const PlayerRow: FC<PlayerRowProps> = ({name, previousSets, sets, games, points}) => {
  return <section className='player-row'>
    <div className="row-col-left player-row-flex">
        {previousSets?.map(set => <Box type='prev-sets'>{ set }</Box>)}
    </div>
    <div className="row-col-middle">
      <Box type='player'>{name}</Box>
    </div>
    <div className="row-col-score">
      <Box type='current'>{sets}</Box>
    </div>
    <div className="row-col-score">
    <Box type='current'>{games}</Box>
    </div>
    <div className="row-col-score">
      <Box type='total'>{points}</Box>
    </div>
  </section>
}

interface CourtHeaderProps {
  name: string
}

const CourtHeader: FC<CourtHeaderProps> = ({name}) => {
  return <header className='court-header'>
    <h1>{ name }</h1>
  </header>
}

interface ScoreBoxProps {
  children: ReactNode
}

const ScoreBox: FC<ScoreBoxProps> = ({children}) => {
  return (
    <main className='score-box'>
      {children}
    </main>
  )
}

const PlayerNav: FC = () => {
  return (
    <nav className="player-nav">
      <div className="row-col-left player-nav-text">
        <h2>Previous Sets</h2>
      </div>
      <div className="row-col-middle player-nav-text">
        <h2>Player</h2>
      </div>
      <div className="row-col-score player-nav-text">
        <h2>Sets</h2>
      </div>
      <div className="row-col-score player-nav-text">
        <h2>Games</h2>
      </div>
      <div className="row-col-score player-nav-text">
        <h2>Points</h2>
      </div>
    </nav>
  )
}

function App() {
  const [playerData,] = useState<PlayerRowProps[]>([
    {
      name: 'player 1',
      previousSets: [
        7,
        6,
      ],
      sets: 2,
      games: 3,
      points: 30,
    },
    {
      name: 'player 2',
      previousSets: [
        6,
        4,
      ],
      sets: 2,
      games: 3,
      points: 15,
    }
  ])

  return (
    <>
      <ScoreBox>
        <CourtHeader name='Court No. 1' />
        <PlayerNav />
        {playerData.map(eachPlayerData => {
          return <PlayerRow
            name={eachPlayerData.name}
            previousSets={eachPlayerData.previousSets}
            sets={eachPlayerData.sets}
            games={eachPlayerData.games}
            points={eachPlayerData.points}
          />
        })}
      </ScoreBox>
    </>
  )
}

export default App
