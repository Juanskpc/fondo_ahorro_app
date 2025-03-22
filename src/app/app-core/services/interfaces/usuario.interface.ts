export interface Usuario {
    Persona: Persona;
    tipo:    string;
    estado:  string;
}

export interface Persona {
    num_identificacion:  string;
    primer_nombre:       string;
    primer_apellido:     string;
    foto_persona:        string;
    TalenEmpleadoCargos: any[];
    AcadeEstudiantes:    AcadeEstudiante[];
}

export interface AcadeEstudiante {
    id_estudiante:                   number;
    codigo_estudiante:               string;
    id_tipo_est:                     number;
    AcadeEstudianteDetalleProgramas: AcadeEstudianteDetallePrograma[];
}

export interface AcadeEstudianteDetallePrograma {
    id_est_dprograma:          number;
    id_estudiante:             number;
    id_acade_detalle_programa: number;
    id_cls_est_clase:          number;
    AcadeDetallePrograma:      AcadeDetallePrograma;
}

export interface AcadeDetallePrograma {
    id_acade_detalle_programa: string;
    id_detalle_unidad:         number;
    id_jornada:                number;
    numero_semestres:          string;
    semestre_vigente:          string;
    es_semestral:              string;
    tiene_prueba_interna:      string;
    valor_prueba_interna:      string;
    GenerDetalleUnidad:        GenerDetalleUnidad;
}

export interface GenerDetalleUnidad {
    id_detalle_unidad:   number;
    codigo_localizacion: string;
    estado_unidad:       string;
    cod_homologa_nomina: null;
    id_unidad:           number;
    codigo:              string;
    GenerUnidad:         GenerUnidad;
}

export interface GenerUnidad {
    id_unidad:         number;
    nombre_unidad:     string;
    id_tipo_unidad:    number;
    codigo_planeacion: null;
}
