import { useMemo } from 'react'
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { NoteData, RawNote, Tag } from '../../../types';
import { v4 as uuidV4 } from "uuid";

const Home = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return {
        ...note,
        tags: tags.filter(
          tag => note.tagIds.includes(tag.id))
      }
    })
  }, [notes, tags]);

  const onCreateNote = (data: NoteData) => {
    setNotes(prevNotes => {
      return [...prevNotes, {
        ...data,
        id: uuidV4(),
        tagIds: tags.map(tag => tag.id)
      }]
    })
  }

  return (
    <div>Home</div>
  )
}

export default Home