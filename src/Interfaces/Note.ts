export interface NotesProps {
  data: {
    _id: number;
    title: string;
    notes: string;
  };
  onRemove: (noteId: number) => Promise<void>;
  onUpdate: (
    noteId: number,
    updatedNote: { title: string; notes: string }
  ) => Promise<void>;
}

export interface Note {
  _id: number;
  title: string;
  notes: string;
  priority: boolean;
}

export interface SidebarProps {
  allNotes: Note[];
  setAllNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}
