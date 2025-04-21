export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      competitions: {
        Row: {
          created_at: string
          created_by: string
          date: string
          description: string | null
          id: string
          location: string
          max_participants: number | null
          name: string
          registration_deadline: string | null
          registration_open: boolean | null
          status: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          date: string
          description?: string | null
          id?: string
          location: string
          max_participants?: number | null
          name: string
          registration_deadline?: string | null
          registration_open?: boolean | null
          status?: string
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          date?: string
          description?: string | null
          id?: string
          location?: string
          max_participants?: number | null
          name?: string
          registration_deadline?: string | null
          registration_open?: boolean | null
          status?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      copilot_registrations: {
        Row: {
          address: string
          birth_date: string
          city: string
          country: string
          created_at: string
          emergency_contact_name: string
          emergency_contact_phone: string
          first_name: string
          id: string
          last_name: string
          license_expiry: string
          license_number: string
          nationality: string
          phone: string
          postal_code: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address: string
          birth_date: string
          city: string
          country: string
          created_at?: string
          emergency_contact_name: string
          emergency_contact_phone: string
          first_name: string
          id?: string
          last_name: string
          license_expiry: string
          license_number: string
          nationality: string
          phone: string
          postal_code: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string
          birth_date?: string
          city?: string
          country?: string
          created_at?: string
          emergency_contact_name?: string
          emergency_contact_phone?: string
          first_name?: string
          id?: string
          last_name?: string
          license_expiry?: string
          license_number?: string
          nationality?: string
          phone?: string
          postal_code?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      driver_registrations: {
        Row: {
          address: string
          asa: string
          birth_date: string
          city: string
          country: string
          created_at: string
          emergency_contact_name: string
          emergency_contact_phone: string
          first_name: string
          id: string
          last_name: string
          license_expiry: string
          license_number: string
          nationality: string
          phone: string
          postal_code: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address: string
          asa: string
          birth_date: string
          city: string
          country: string
          created_at?: string
          emergency_contact_name: string
          emergency_contact_phone: string
          first_name: string
          id?: string
          last_name: string
          license_expiry: string
          license_number: string
          nationality: string
          phone: string
          postal_code: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string
          asa?: string
          birth_date?: string
          city?: string
          country?: string
          created_at?: string
          emergency_contact_name?: string
          emergency_contact_phone?: string
          first_name?: string
          id?: string
          last_name?: string
          license_expiry?: string
          license_number?: string
          nationality?: string
          phone?: string
          postal_code?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      driver_safety_equipment: {
        Row: {
          co_pilot_blood_type: string | null
          co_pilot_email: string | null
          co_pilot_first_name: string | null
          co_pilot_last_name: string | null
          co_pilot_license_number: string | null
          co_pilot_phone: string | null
          copilot_gloves_brand: string | null
          copilot_gloves_expiry_date: string | null
          copilot_gloves_homologation: string | null
          copilot_hans_brand: string | null
          copilot_hans_expiry_date: string | null
          copilot_hans_homologation: string | null
          copilot_helmet_brand: string | null
          copilot_helmet_expiry_date: string | null
          copilot_helmet_homologation: string | null
          copilot_helmet_model: string | null
          copilot_shoes_brand: string | null
          copilot_shoes_expiry_date: string | null
          copilot_shoes_homologation: string | null
          copilot_suit_brand: string | null
          copilot_suit_expiry_date: string | null
          copilot_suit_homologation: string | null
          copilot_underwear_brand: string | null
          copilot_underwear_expiry_date: string | null
          copilot_underwear_homologation: string | null
          created_at: string
          driver_id: string
          gloves_brand: string | null
          gloves_expiry_date: string | null
          gloves_homologation: string | null
          hans_brand: string | null
          hans_expiry_date: string | null
          hans_homologation: string | null
          helmet_brand: string | null
          helmet_expiry_date: string | null
          helmet_homologation: string | null
          helmet_model: string | null
          id: string
          shoes_brand: string | null
          shoes_expiry_date: string | null
          shoes_homologation: string | null
          suit_brand: string | null
          suit_expiry_date: string | null
          suit_homologation: string | null
          underwear_brand: string | null
          underwear_expiry_date: string | null
          underwear_homologation: string | null
          updated_at: string
        }
        Insert: {
          co_pilot_blood_type?: string | null
          co_pilot_email?: string | null
          co_pilot_first_name?: string | null
          co_pilot_last_name?: string | null
          co_pilot_license_number?: string | null
          co_pilot_phone?: string | null
          copilot_gloves_brand?: string | null
          copilot_gloves_expiry_date?: string | null
          copilot_gloves_homologation?: string | null
          copilot_hans_brand?: string | null
          copilot_hans_expiry_date?: string | null
          copilot_hans_homologation?: string | null
          copilot_helmet_brand?: string | null
          copilot_helmet_expiry_date?: string | null
          copilot_helmet_homologation?: string | null
          copilot_helmet_model?: string | null
          copilot_shoes_brand?: string | null
          copilot_shoes_expiry_date?: string | null
          copilot_shoes_homologation?: string | null
          copilot_suit_brand?: string | null
          copilot_suit_expiry_date?: string | null
          copilot_suit_homologation?: string | null
          copilot_underwear_brand?: string | null
          copilot_underwear_expiry_date?: string | null
          copilot_underwear_homologation?: string | null
          created_at?: string
          driver_id: string
          gloves_brand?: string | null
          gloves_expiry_date?: string | null
          gloves_homologation?: string | null
          hans_brand?: string | null
          hans_expiry_date?: string | null
          hans_homologation?: string | null
          helmet_brand?: string | null
          helmet_expiry_date?: string | null
          helmet_homologation?: string | null
          helmet_model?: string | null
          id?: string
          shoes_brand?: string | null
          shoes_expiry_date?: string | null
          shoes_homologation?: string | null
          suit_brand?: string | null
          suit_expiry_date?: string | null
          suit_homologation?: string | null
          underwear_brand?: string | null
          underwear_expiry_date?: string | null
          underwear_homologation?: string | null
          updated_at?: string
        }
        Update: {
          co_pilot_blood_type?: string | null
          co_pilot_email?: string | null
          co_pilot_first_name?: string | null
          co_pilot_last_name?: string | null
          co_pilot_license_number?: string | null
          co_pilot_phone?: string | null
          copilot_gloves_brand?: string | null
          copilot_gloves_expiry_date?: string | null
          copilot_gloves_homologation?: string | null
          copilot_hans_brand?: string | null
          copilot_hans_expiry_date?: string | null
          copilot_hans_homologation?: string | null
          copilot_helmet_brand?: string | null
          copilot_helmet_expiry_date?: string | null
          copilot_helmet_homologation?: string | null
          copilot_helmet_model?: string | null
          copilot_shoes_brand?: string | null
          copilot_shoes_expiry_date?: string | null
          copilot_shoes_homologation?: string | null
          copilot_suit_brand?: string | null
          copilot_suit_expiry_date?: string | null
          copilot_suit_homologation?: string | null
          copilot_underwear_brand?: string | null
          copilot_underwear_expiry_date?: string | null
          copilot_underwear_homologation?: string | null
          created_at?: string
          driver_id?: string
          gloves_brand?: string | null
          gloves_expiry_date?: string | null
          gloves_homologation?: string | null
          hans_brand?: string | null
          hans_expiry_date?: string | null
          hans_homologation?: string | null
          helmet_brand?: string | null
          helmet_expiry_date?: string | null
          helmet_homologation?: string | null
          helmet_model?: string | null
          id?: string
          shoes_brand?: string | null
          shoes_expiry_date?: string | null
          shoes_homologation?: string | null
          suit_brand?: string | null
          suit_expiry_date?: string | null
          suit_homologation?: string | null
          underwear_brand?: string | null
          underwear_expiry_date?: string | null
          underwear_homologation?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      ffsa_engagement_forms: {
        Row: {
          created_at: string
          document_url: string | null
          driver_id: string
          event_id: string
          event_type: string
          form_data: Json
          id: string
          notes: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          document_url?: string | null
          driver_id: string
          event_id: string
          event_type: string
          form_data?: Json
          id?: string
          notes?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          document_url?: string | null
          driver_id?: string
          event_id?: string
          event_type?: string
          form_data?: Json
          id?: string
          notes?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      organizer_spaces: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          organizer_id: string | null
          space_name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: never
          organizer_id?: string | null
          space_name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: never
          organizer_id?: string | null
          space_name?: string
        }
        Relationships: []
      }
      organizers: {
        Row: {
          created_at: string | null
          email: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: never
          name: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: never
          name?: string
        }
        Relationships: []
      }
      participant_spaces: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          participant_id: number
          space_name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: never
          participant_id: number
          space_name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: never
          participant_id?: number
          space_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "participant_spaces_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "participants"
            referencedColumns: ["id"]
          },
        ]
      }
      participants: {
        Row: {
          created_at: string | null
          email: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: never
          name: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: never
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          blood_type: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          license_category: string | null
          license_number: string | null
          phone: string | null
          role: string
          updated_at: string
        }
        Insert: {
          blood_type?: string | null
          created_at?: string
          email: string
          first_name: string
          id: string
          last_name: string
          license_category?: string | null
          license_number?: string | null
          phone?: string | null
          role?: string
          updated_at?: string
        }
        Update: {
          blood_type?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          license_category?: string | null
          license_number?: string | null
          phone?: string | null
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      rallies: {
        Row: {
          created_at: string
          description: string | null
          end_date: string
          id: string
          is_upcoming: boolean
          location: string
          name: string
          registration_deadline: string | null
          registration_open: boolean
          start_date: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          end_date: string
          id?: string
          is_upcoming?: boolean
          location: string
          name: string
          registration_deadline?: string | null
          registration_open?: boolean
          start_date: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          end_date?: string
          id?: string
          is_upcoming?: boolean
          location?: string
          name?: string
          registration_deadline?: string | null
          registration_open?: boolean
          start_date?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      rally_results: {
        Row: {
          created_at: string
          driver_id: string
          id: string
          position: number
          rally_id: string
          stage_id: string
          time_seconds: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          driver_id: string
          id?: string
          position: number
          rally_id: string
          stage_id: string
          time_seconds: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          driver_id?: string
          id?: string
          position?: number
          rally_id?: string
          stage_id?: string
          time_seconds?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rally_results_rally_id_fkey"
            columns: ["rally_id"]
            isOneToOne: false
            referencedRelation: "rallies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rally_results_rally_id_fkey"
            columns: ["rally_id"]
            isOneToOne: false
            referencedRelation: "upcoming_rallies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rally_results_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "rally_stages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rally_results_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "rally_stages_complete"
            referencedColumns: ["id"]
          },
        ]
      }
      rally_stages: {
        Row: {
          created_at: string
          description: string | null
          difficulty_level: string
          distance: number
          finish_latitude: number | null
          finish_longitude: number | null
          id: string
          location: string
          map_zoom_level: number | null
          max_participants: number
          name: string
          rally_id: string
          route_type: string
          stage_order: number | null
          start_latitude: number | null
          start_longitude: number | null
          start_time: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty_level?: string
          distance: number
          finish_latitude?: number | null
          finish_longitude?: number | null
          id?: string
          location: string
          map_zoom_level?: number | null
          max_participants?: number
          name: string
          rally_id: string
          route_type?: string
          stage_order?: number | null
          start_latitude?: number | null
          start_longitude?: number | null
          start_time?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty_level?: string
          distance?: number
          finish_latitude?: number | null
          finish_longitude?: number | null
          id?: string
          location?: string
          map_zoom_level?: number | null
          max_participants?: number
          name?: string
          rally_id?: string
          route_type?: string
          stage_order?: number | null
          start_latitude?: number | null
          start_longitude?: number | null
          start_time?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rally_stages_rally_id_fkey"
            columns: ["rally_id"]
            isOneToOne: false
            referencedRelation: "rallies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rally_stages_rally_id_fkey"
            columns: ["rally_id"]
            isOneToOne: false
            referencedRelation: "upcoming_rallies"
            referencedColumns: ["id"]
          },
        ]
      }
      registration_equipment: {
        Row: {
          copilot_equipment_id: string | null
          created_at: string
          driver_equipment_id: string | null
          id: string
          registration_id: string
          updated_at: string
        }
        Insert: {
          copilot_equipment_id?: string | null
          created_at?: string
          driver_equipment_id?: string | null
          id?: string
          registration_id: string
          updated_at?: string
        }
        Update: {
          copilot_equipment_id?: string | null
          created_at?: string
          driver_equipment_id?: string | null
          id?: string
          registration_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "registration_equipment_copilot_equipment_id_fkey"
            columns: ["copilot_equipment_id"]
            isOneToOne: false
            referencedRelation: "driver_safety_equipment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registration_equipment_driver_equipment_id_fkey"
            columns: ["driver_equipment_id"]
            isOneToOne: false
            referencedRelation: "driver_safety_equipment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registration_equipment_registration_id_fkey"
            columns: ["registration_id"]
            isOneToOne: false
            referencedRelation: "registrations"
            referencedColumns: ["id"]
          },
        ]
      }
      registrations: {
        Row: {
          co_driver_id: string | null
          competition_id: string | null
          created_at: string
          driver_id: string
          event_type: string | null
          id: string
          rally_id: string
          status: string
          updated_at: string
          vehicle_id: string | null
        }
        Insert: {
          co_driver_id?: string | null
          competition_id?: string | null
          created_at?: string
          driver_id: string
          event_type?: string | null
          id?: string
          rally_id: string
          status?: string
          updated_at?: string
          vehicle_id?: string | null
        }
        Update: {
          co_driver_id?: string | null
          competition_id?: string | null
          created_at?: string
          driver_id?: string
          event_type?: string | null
          id?: string
          rally_id?: string
          status?: string
          updated_at?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "registrations_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registrations_rally_id_fkey"
            columns: ["rally_id"]
            isOneToOne: false
            referencedRelation: "rallies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registrations_rally_id_fkey"
            columns: ["rally_id"]
            isOneToOne: false
            referencedRelation: "upcoming_rallies"
            referencedColumns: ["id"]
          },
        ]
      }
      safety_equipment: {
        Row: {
          belts_brand: string
          belts_expiration_date: string
          co_driver_helmet_brand: string
          co_driver_helmet_expiration_date: string
          co_driver_helmet_model: string
          co_driver_suit_brand: string
          co_driver_suit_expiration_date: string
          created_at: string
          driver_helmet_brand: string
          driver_helmet_expiration_date: string
          driver_helmet_model: string
          driver_suit_brand: string
          driver_suit_expiration_date: string
          has_extinguisher: boolean
          has_fia_hans: boolean
          has_first_aid_kit: boolean
          has_tow_rope: boolean
          has_warning_triangle: boolean
          id: string
          registration_id: string
          seats_brand: string
          seats_expiration_date: string
          updated_at: string
        }
        Insert: {
          belts_brand: string
          belts_expiration_date: string
          co_driver_helmet_brand: string
          co_driver_helmet_expiration_date: string
          co_driver_helmet_model: string
          co_driver_suit_brand: string
          co_driver_suit_expiration_date: string
          created_at?: string
          driver_helmet_brand: string
          driver_helmet_expiration_date: string
          driver_helmet_model: string
          driver_suit_brand: string
          driver_suit_expiration_date: string
          has_extinguisher?: boolean
          has_fia_hans?: boolean
          has_first_aid_kit?: boolean
          has_tow_rope?: boolean
          has_warning_triangle?: boolean
          id?: string
          registration_id: string
          seats_brand: string
          seats_expiration_date: string
          updated_at?: string
        }
        Update: {
          belts_brand?: string
          belts_expiration_date?: string
          co_driver_helmet_brand?: string
          co_driver_helmet_expiration_date?: string
          co_driver_helmet_model?: string
          co_driver_suit_brand?: string
          co_driver_suit_expiration_date?: string
          created_at?: string
          driver_helmet_brand?: string
          driver_helmet_expiration_date?: string
          driver_helmet_model?: string
          driver_suit_brand?: string
          driver_suit_expiration_date?: string
          has_extinguisher?: boolean
          has_fia_hans?: boolean
          has_first_aid_kit?: boolean
          has_tow_rope?: boolean
          has_warning_triangle?: boolean
          id?: string
          registration_id?: string
          seats_brand?: string
          seats_expiration_date?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "safety_equipment_registration_id_fkey"
            columns: ["registration_id"]
            isOneToOne: false
            referencedRelation: "registrations"
            referencedColumns: ["id"]
          },
        ]
      }
      stage_organizer_notes: {
        Row: {
          created_at: string
          id: string
          note: string
          stage_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          note: string
          stage_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          note?: string
          stage_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "stage_organizer_notes_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "rally_stages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stage_organizer_notes_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "rally_stages_complete"
            referencedColumns: ["id"]
          },
        ]
      }
      table_owner: {
        Row: {
          created_at: string | null
          id: number
          owner_name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: never
          owner_name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: never
          owner_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      timing_points: {
        Row: {
          created_at: string
          description: string | null
          id: string
          latitude: number
          longitude: number
          name: string
          order_index: number
          point_type: string
          stage_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          latitude: number
          longitude: number
          name: string
          order_index: number
          point_type: string
          stage_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          latitude?: number
          longitude?: number
          name?: string
          order_index?: number
          point_type?: string
          stage_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "timing_points_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "rally_stages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "timing_points_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "rally_stages_complete"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_classes: {
        Row: {
          created_at: string
          description: string | null
          group_id: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          group_id?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          group_id?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_classes_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "vehicle_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_groups: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      vehicle_makes: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          category: string
          chassis_number: string
          class: string
          created_at: string
          engine_capacity: string
          engine_number: string
          group_class: string
          homologation_number: string
          id: string
          make: string
          model: string
          owner_id: string
          registration_number: string
          technical_passport_number: string
          updated_at: string
          year: string
        }
        Insert: {
          category: string
          chassis_number: string
          class: string
          created_at?: string
          engine_capacity: string
          engine_number: string
          group_class: string
          homologation_number: string
          id?: string
          make: string
          model: string
          owner_id: string
          registration_number: string
          technical_passport_number: string
          updated_at?: string
          year: string
        }
        Update: {
          category?: string
          chassis_number?: string
          class?: string
          created_at?: string
          engine_capacity?: string
          engine_number?: string
          group_class?: string
          homologation_number?: string
          id?: string
          make?: string
          model?: string
          owner_id?: string
          registration_number?: string
          technical_passport_number?: string
          updated_at?: string
          year?: string
        }
        Relationships: []
      }
    }
    Views: {
      rally_results_complete: {
        Row: {
          created_at: string | null
          driver_first_name: string | null
          driver_id: string | null
          driver_last_name: string | null
          id: string | null
          position: number | null
          rally_date: string | null
          rally_id: string | null
          rally_name: string | null
          stage_id: string | null
          stage_name: string | null
          time_seconds: number | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rally_results_rally_id_fkey"
            columns: ["rally_id"]
            isOneToOne: false
            referencedRelation: "rallies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rally_results_rally_id_fkey"
            columns: ["rally_id"]
            isOneToOne: false
            referencedRelation: "upcoming_rallies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rally_results_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "rally_stages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rally_results_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "rally_stages_complete"
            referencedColumns: ["id"]
          },
        ]
      }
      rally_stages_complete: {
        Row: {
          created_at: string | null
          description: string | null
          difficulty_level: string | null
          distance: number | null
          finish_latitude: number | null
          finish_longitude: number | null
          id: string | null
          location: string | null
          map_zoom_level: number | null
          max_participants: number | null
          name: string | null
          rally_id: string | null
          rally_name: string | null
          rally_status: string | null
          route_type: string | null
          stage_order: number | null
          start_latitude: number | null
          start_longitude: number | null
          start_time: string | null
          status: string | null
          timing_points_count: number | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rally_stages_rally_id_fkey"
            columns: ["rally_id"]
            isOneToOne: false
            referencedRelation: "rallies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rally_stages_rally_id_fkey"
            columns: ["rally_id"]
            isOneToOne: false
            referencedRelation: "upcoming_rallies"
            referencedColumns: ["id"]
          },
        ]
      }
      upcoming_rallies: {
        Row: {
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string | null
          is_upcoming: boolean | null
          location: string | null
          name: string | null
          registration_deadline: string | null
          registration_open: boolean | null
          start_date: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string | null
          is_upcoming?: boolean | null
          location?: string | null
          name?: string | null
          registration_deadline?: string | null
          registration_open?: boolean | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string | null
          is_upcoming?: boolean | null
          location?: string | null
          name?: string | null
          registration_deadline?: string | null
          registration_open?: boolean | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_timing_point: {
        Args: {
          p_stage_id: string
          p_name: string
          p_description: string
          p_latitude: number
          p_longitude: number
          p_point_type: string
          p_order_index: number
        }
        Returns: string
      }
      delete_timing_point: {
        Args: { p_id: string }
        Returns: boolean
      }
      get_rally_stages: {
        Args: Record<PropertyKey, never> | { rally_id_param: string }
        Returns: {
          stage_id: number
          stage_name: string
        }[]
      }
      get_timing_points: {
        Args: Record<PropertyKey, never> | { stage_id_param: string }
        Returns: undefined
      }
      get_user_profile: {
        Args: { user_id: string }
        Returns: Json
      }
      get_user_role: {
        Args: { user_id: string }
        Returns: string
      }
      is_organizer: {
        Args: { user_id: string }
        Returns: boolean
      }
      register_for_rally: {
        Args: {
          p_rally_id: string
          p_driver_id: string
          p_co_driver_id: string
          p_vehicle_id: string
          p_event_type: string
        }
        Returns: string
      }
      update_timing_point: {
        Args: {
          p_id: string
          p_name: string
          p_description: string
          p_latitude: number
          p_longitude: number
          p_point_type: string
          p_order_index: number
        }
        Returns: boolean
      }
      validate_event_id: {
        Args: { p_event_type: string; p_event_id: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
