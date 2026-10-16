import { daftarProyek } from "./data.js";
import { ubahDaftarProyek } from "./state.js";
import { renderProyek } from "./dom.js";
import { pasangEvent } from "./events.js";

ubahDaftarProyek(daftarProyek);
renderProyek(daftarProyek);
pasangEvent();
