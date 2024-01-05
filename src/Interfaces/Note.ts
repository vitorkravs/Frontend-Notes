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
