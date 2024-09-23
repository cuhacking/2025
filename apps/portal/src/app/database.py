import psycopg
import os
import csv


def create_tables(cursor):
    
    cursor.execute("""
    CREATE TYPE ethnicity_type AS ENUM (
        'Panamanian',
        'Choctaw',
        'Chinese',
        'Asian Indian',
        'Cheyenne',
        'Colville',
        'Ottawa',
        'Cambodian',
        'Creek',
        'Colombian',
        'Aleut',
        'Paraguayan',
        'Hmong',
        'Puget Sound Salish',
        'Nicaraguan',
        'Crow',
        'Asian',
        'Vietnamese',
        'Micronesian',
        'Iroquois',
        'Japanese',
        'Lumbee',
        'Pueblo',
        'Melanesian',
        'Malaysian',
        'Comanche',
        'Eskimo',
        'Alaskan Athabascan',
        'Chickasaw',
        'Thai',
        'Native Hawaiian and Other Pacific Islander (NHPI)',
        'Black or African American',
        'Tongan',
        'Dominican (Dominican Republic)',
        'Costa Rican',
        'Bolivian',
        'Mexican',
        'Pakistani',
        'American Indian',
        'Alaska Native',
        'Houma',
        'Salvadoran',
        'Central American',
        'Uruguayan',
        'Polynesian',
        'Laotian',
        'Tlingit-Haida',
        'Yaqui',
        'Korean',
        'Menominee',
        'Latin American Indian',
        'Shoshone',
        'Chippewa',
        'Yuman',
        'Honduran',
        'Tohono O''Odham',
        'South American',
        'Sioux',
        'Potawatomi',
        'Peruvian',
        'Ecuadorian',
        'Filipino',
        'Kiowa',
        'Cherokee',
        'Samoan',
        'Ute',
        'Blackfeet',
        'Fijian',
        'Spaniard',
        'Guatemalan',
        'Taiwanese',
        'Argentinian',
        'Navajo',
        'Bangladeshi',
        'Cree',
        'Delaware',
        'Osage',
        'Paiute',
        'Pima',
        'Sri Lankan',
        'Cuban',
        'Seminole',
        'Native Hawaiian',
        'Chilean',
        'Venezuelan',
        'Apache',
        'White',
        'Guamanian',
        'Indonesian',
        'Chamorro',
        'Yakama',
        'Puerto Rican',
        'American Indian and Alaska Native (AIAN)'
    );
    """)

    cursor.execute("""
        CREATE TYPE gender_type AS ENUM (
            'Male', 'Female', 'Agender', 'Bigender', 'Genderfluid', 'Genderqueer', 'Non-binary', 'Polygender'
        );
    """)

    create_user_table = """
        CREATE TABLE "User" (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            middle_name VARCHAR(255) NULL,
            last_name VARCHAR(255) NOT NULL,
            preferred_name VARCHAR(255) NULL,
            email VARCHAR(255) NOT NULL,
            date_of_birth VARCHAR(255), 
            gender gender_type,
            phone_number_country_code INTEGER CHECK (phone_number_country_code IN (1, 44, 81, 86, 91, 971, 972, 995, 998)),
            phone_number VARCHAR(15),
            hackathons_attended INTEGER,
            any_other_comments TEXT NULL,
            international_or_domestic BOOLEAN NULL,
            ethnicity ethnicity_type NULL,
            estimated_grad_year INTEGER NULL,
            mlh_reqs BOOLEAN DEFAULT FALSE NOT NULL
            );
        """
     

    cursor.execute(create_user_table)


def load_tables(cursor):
    file_path = '/home/jeremyfriesen/2025/apps/portal/public/User_mock_data.csv'
    with open(file_path, 'r', encoding='utf-8') as file:
        users = csv.DictReader(file)
        for user in users:
            insert_into_table(cursor, user)


def insert_into_table(cursor, user):
    try:
        insert_query = """
            INSERT INTO "User" (first_name, middle_name, last_name, preferred_name, email, date_of_birth, gender, phone_number_country_code, phone_number, hackathons_attended, any_other_comments, international_or_domestic, ethnicity, estimated_grad_year, mlh_reqs)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            ON CONFLICT DO NOTHING;
            """

        cursor.execute(insert_query, (
            user['first_name'],
            user['middle_name'],
            user['last_name'],
            user['preferred_name'],
            user['email'],
            user['date_of_birth'], 
            user['gender'],
            user['phone_number_country_code'],
            user['phone_number'],
            user['hackathons_attended'],
            user['any_other_comments'],
            user['international_or_domestic'], 
            user['ethnicity'],
            user['estimated_grad_year'],
            user['mlh_reqs']
        ))

    except Exception as e:
        print(f"Error inserting user {user.get('id')}: {e}")

def main():
    conn_params = {
        'dbname': os.getenv('DB_NAME', 'project_database'),
        'user': os.getenv('DB_USER', 'postgres'),
        'password': os.getenv('DB_PASSWORD', '1234'),
        'host': os.getenv('DB_HOST', 'localhost'),
        'port': os.getenv('DB_PORT', '5432')
    }

    with psycopg.connect(**conn_params) as conn:
        with conn.cursor() as cur:
            
            create_tables(cur)
            conn.commit()

            load_tables(cur)
            conn.commit()


if __name__ == "__main__":
    main()