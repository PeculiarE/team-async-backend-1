// export const createUserTable = `
//     create table if not exists user_table (
//     user_id uuid primary key,
//     full_name varchar not null,
//     email varchar unique not null,
//     phone bigint not null,
//     password varchar not null,
//     dob date,
//     age int,
//     address varchar,
//     university varchar,
//     course_of_study varchar,
//     cgpa numeric(3, 2),
//     batch_id int,
//     test_score int,
//     cv_url varchar unique,
//     photo_url varchar unique,
//     created_at timestamptz default now(),
//     updated_at timestamptz default now()
// );`,

// export const createApplyTable = `
//     create table if not exists applicants (
//         id uuid primary key,
//         first_name varchar not null,
//         last_name varchar not null,
//         email varchar unique not null,
//         dob date not null,
//         age int not null,
//         address varchar not null,
//         university varchar not null,
//         course varchar not null,
//         cgpa numeric(3, 2),
//         cv varchar,
//         photo varchar,
//         batch_id uuid not null,
//         created_at timestamptz default now(),
//         updated_at timestamptz default now()
// );`,

export const insertUserApplication = `
        insert into applicants (
            id,
            first_name,
            last_name,
            email,
            dob,
            age,
            address,
            university,
            course,
            cgpa,
            cv,
            photo,
            batch_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) returning 
            id,
            first_name,
            last_name,
            email,
            dob,
            age,
            address,
            university,
            course,
            cgpa,
            cv,
            photo,
            batch_id,
            created_at;
            `;

export const fetchUserByEmail = 'SELECT * FROM user_info WHERE email = $1;';

export const updateUser = `
    UPDATE user_table
    SET
    id = $1,
    first_name = $2,
    last_name = $3,
    email = $4,
    dob = $5,
    age = $6,
    address = $7,
    university = $8,
    course = $9,
    cgpa = $10,
    cv = $11,
    photo = $12,
    updated_at = NOW() WHERE user_id = $13;`;
